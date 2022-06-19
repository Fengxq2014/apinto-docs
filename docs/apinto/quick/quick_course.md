# 🚀快速入门教程

## 使用步骤

1、创建服务

2、绑定路由

流程示意图如下：

![](http://data.eolinker.com/course/L5fNXYw3a7449f979534a6dc7e631cf1f67756bb3afadd9.png)

--------------

## 详细步骤说明

**Apinto**支持以下方式进行网关配置：

* openAPI：可在网关使用过程中动态配置网关信息，包括路由、服务、负载均衡、鉴权、服务发现等

#### 程序配置说明

程序启动前需要配置与程序相同目录下的文件`config.yml`,用于指定节点的路由监听端口，ssl证书等信息。

```yaml
listen:   # 节点的路由监听端口
  - 8080
ssl:
  listen:
    - port: 443       #https端口
      certificate:    # 不配表示使用所有 cert_dir中的证书，默认pem文件后缀为pem，key后缀为key
        - cert: cert.pem
          key:  cert.key
admin:    # openAPI request info
  scheme: http # listen scheme
  listen: 9400 # listen port
  ip: 0.0.0.0 # listen ip
certificate:
  dir: ./cert # 证书文件目录，不填则默认从cert目录下载
```

#### 启动程序

```shell
./apinto start
```


### 使用openAPI配置网关

在程序启动后，我们可以通过openAPI动态配置网关信息

#### 创建服务

以访问apinto官方示例接口为例, 将返回请求的相关信息。

```shell
curl -X POST http://127.0.0.1:9400/api/service \
-H "Content-type: application/json" \
-d '{
    "name": "apintoapi",
    "driver": "http",
    "desc": "访问demo",
    "timeout": 3000,
    "anonymous": {"type": "round-robin","config": "demo-apinto.eolink.com:8280"},
    "retry": 3,
    "scheme": "http"
}'
```

请求参数说明如下：

![](http://data.eolinker.com/course/aASF6GB56e2fb17cc85eb54fe99728aec52082cf00d3a6b.png)



返回数据示例：

```json
{
    "id":"apintoapi@service",
    "name":"apintoapi",
    "driver":"http",
    "profession":"service",
	"create":"2021-10-28 17:42:12",
	"update":"2021-10-28 17:42:12"
}
```

返回数据说明如下：

![](http://data.eolinker.com/course/u74G56bce2625c3563719666a0253e94d9451955ff4c1bc.png)



#### 创建路由，并且服务id绑定路由

将第1步返回的 **id** 值填入到路由配置的 **target** 中，如上例中的 **id** 为 `apintoapi@service`

```shell
curl -X POST http://127.0.0.1:9400/api/router \
-H "Content-type: application/json" \
-d '{
    "name": "apintoapi",
    "driver": "http",
    "desc": "http",
    "listen": 8080,
    "rules": [{
        "location": "/demo"
    }],
    "target": "apintoapi@service"
}'
```

**注意**：路由配置的`listen`必须在config.yml中的路由监听端口列表中存在。



请求参数说明如下：

![](http://data.eolinker.com/course/CDudfKj61f72a76faf19f2c88bf2f6b979a851f29730c88.png)

返回数据示例：
```json
{
    "id":"apintoapi@router",
    "name":"apintoapi",
    "driver":"http",
    "profession":"router",
    "create":"2021-10-28 17:51:49",
    "update":"2021-10-28 17:51:49"
}
```
返回数据说明如下：

![](http://data.eolinker.com/course/ZyPW36jb5d2f88cf4e94e5e3b116fa716b547c2e54d1209.png)


至此，带有路由的服务转发配置完成

#### 访问服务

```shell
curl 'http://127.0.0.1:8080/demo'
```

#### 返回结果

```json
{
    "body":"",
    "header":{
        "Accept":[
            "*/*"
        ],
        "User-Agent":[
            "curl/7.75.0"
        ],
        "X-Forwarded-For":[
            "127.0.0.1,127.0.0.1"
        ]
    },
    "host":"127.0.0.1:8080",
    "method":"GET",
    "path":"/demo",
    "query":{

    },
    "url":"/demo"
}
```

