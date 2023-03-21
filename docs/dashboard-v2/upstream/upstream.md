# 上游管理

上游管理指的是管理着后端业务系统在各个集群的生命周期。
点击上游服务菜单，展开后再点击上游管理进入上游管理列表页面，对上游有查看和删除操作，可新建上游。

![](http://data.eolinker.com/course/b5csmvk0aad2bbfa9f8c7f279a69785725ae4dcdf286310.png)

静态节点配置如下图所示：

![](http://data.eolinker.com/course/vDyEc9d20f7e37ff218c68ba717b40e5b54a4020f59c147.png)

部分字段说明：

| 字段名称    | 字段描述                                                                                                                      |
|---------|---------------------------------------------------------------------------------------------------------------------------|
| 上游名称    | 上游服务名称不能使用中文，因为系统用它作为该上游服务的唯一标识读取或更新数据                                                                                    |
| 请求协议    | 后端系统API的协议，支持HTTP/HTTPS                                                                                                   |
| 负载算法    | 多目标节点，支持轮询算法                                                                                                              |
| 服务发现    | 支持静态节点类型和动态服务类型，该项可选值为静态节点、服务发现列表名称数据                                                                                     |
| 目标节点    | 提供API响应后端系统的主机名/IP+端口号；如果有多个目标节点，则可以通过配置‘权重’来规划每个节点承载的流量比例；目标节点也可以通过引用环境变量，引用的环境变量通过配置格式：{域名/ip}:{port} {weight}，多个以‘;’隔开 |
| 请求超时时间  | 网关请求到后端系统的超时时间                                                                                                            |

引用环境变量操作如下图所示：

![](http://data.eolinker.com/course/aqDPc5gaf72087c1b45742bfe28e462e33b103eb0239ecb.png)
当有开发集群、测试集群以及生产集群时，对应的上游也将会有开发环境上游、测试环境上游以及生产环境上游，其主机域名或IP:端口不同，可引用环境变量，在不同环境的集群管理着这个环境变量的值。 

动态服务发现配置如下图所示：

![](http://data.eolinker.com/course/sVHdYli6101c5df3955c0519aa4fb884bac8de75aff9016.png)