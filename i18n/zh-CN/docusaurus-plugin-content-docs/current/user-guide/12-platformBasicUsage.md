# 快速上手
> 说明：该部分旨在通过简单的操作步骤，体验使用StreamPark平台提交flink作业的便捷流程。

## 配置FLINK_HOME
![1_config_flink_home](/doc/image/platform-usage/1_config_flink_home.png)

![2_add_flink_home_info](/doc/image/platform-usage/2_add_flink_home_info.png)
> 点击"OK"，保存

![3_display_flink_home_config](/doc/image/platform-usage/3_display_flink_home_config.png)
## 配置Flink Cluster
> 根据flink 部署模式 以及 资源管理方式，StreamPark 支持以下6种作业模式
> - **Standalone Session**
> - **Yarn Session**
> - **Yarn Per-job**
> - **Yarn Application**
> - **K8s Session**
> - **K8s Application**
> 
本次选取较为简单的 Standalone Session 模式(**下图绿色连线**)，快速上手。

![4_flink_deployment_execute_model](/doc/image/platform-usage/4_flink_deployment_execute_model.png)

### 服务器启动 flink Standalone Session
```bash
start-cluster.sh
```
![5_start_flink_standalone_session_service](/doc/image/platform-usage/5_start_flink_standalone_session_service.png)
> 页面访问：[http://hadoop:8081/](http://hadoop:8081/)

![6_flink_standalone_session_web_ui](/doc/image/platform-usage/6_flink_standalone_session_web_ui.png)
### 配置Flink Cluster
![7_config_flink_cluster_menu.png](/doc/image/platform-usage/7_config_flink_cluster_menu.png)

![8_add_flink_cluster_info.png](/doc/image/platform-usage/8_add_flink_cluster_info.png)

![9_add_flink_cluster_successfully](/doc/image/platform-usage/9_add_flink_cluster_successfully.png)

![10_display_flink_cluster_list](/doc/image/platform-usage/10_display_flink_cluster_list.png)

## 创建作业
![11_add_flink_job_menu](/doc/image/platform-usage/11_add_flink_job_menu.png)
### 主要参数
> - Development Mode: 选择 “Flink SQL”
> - Execution Mode:  选择 “remote”
> - Flink Version:  选择  "flink-1.14", 即 “1.1 配置FLINK_HOME”里面配置的 
> - Flink Cluster:  选择 “myStandalonSession”, 即“1.2 配置FLINK Cluster”里面配置的 
> - Flink SQL: 详见下面示例
> - Application Name: 作业名称

### 创建作业
![12_add_flink_job_param_1](/doc/image/platform-usage/12_add_flink_job_param_1.png)

![13_add_flink_job_param_2](/doc/image/platform-usage/13_add_flink_job_param_2.png)

![14_add_flink_job_param_3](/doc/image/platform-usage/14_add_flink_job_param_3.png)

### 保存作业
> 点击 蓝色“Submit”按钮，提交作业

![15_save_flink_job](/doc/image/platform-usage/15_save_flink_job.png)

![16_display_flink_job_list](/doc/image/platform-usage/16_display_flink_job_list.png)

## 构建作业
![17_build_flink_job](/doc/image/platform-usage/17_build_flink_job.png)
> 构建成功

![18_build_flink_job_successfully](/doc/image/platform-usage/18_build_flink_job_successfully.png)

## 启动作业
![19_start_flink_job](/doc/image/platform-usage/19_start_flink_job.png)

### 启动检查点设置
![20_set_checkpoint_when_start_flink_job](/doc/image/platform-usage/20_set_checkpoint_when_start_flink_job.png)

### 提交作业
![21_submit_flink_job_1](/doc/image/platform-usage/21_submit_flink_job_1.png)
![22_submit_flink_job_2](/doc/image/platform-usage/22_submit_flink_job_2.png)

## 查看作业状态
### 通过StreamPark看板查看
> StreamPark dashboard

![23_flink_job_dashboard](/doc/image/platform-usage/23_flink_job_dashboard.png)

> 查看作业详情

![24_display_flink_job_details](/doc/image/platform-usage/24_display_flink_job_details.png)

![25_display_flink_job_details_page](/doc/image/platform-usage/25_display_flink_job_details_page.png)

### 查看原生 flink web ui
![26_display_native_flink_job_web_ui](/doc/image/platform-usage/26_display_native_flink_job_web_ui.png)

![27_display_native_flink_job_web_ui_2](/doc/image/platform-usage/27_display_native_flink_job_web_ui_2.png)

> 至此，一个使用StreamPark平台提交flink job的流程基本完成。下面简单总结下StreamPark平台管理flink作业的大致流程。

## StreamPark平台管理flink job的流程
![28_streampark_process_workflow](/doc/image/platform-usage/28_streampark_process_workflow.png)

> 通过 StreamPark 平台 停止、修改、删除 flink job 相对简单，大家可自行体验，需要说明的一点是：**若作业为running状态，则不可删除，需先停止**。


# StreamPark系统模块简介
## 系统设置
> 菜单位置

![29_streampark_system_menu](/doc/image/platform-usage/29_streampark_system_menu.png)

### User Management
> 用于管理StreamPark平台用户

![30_streampark_user_management_menu](/doc/image/platform-usage/30_streampark_user_management_menu.png)
### Token Management
> 允许用户以Restful api形式操作flink job

![31_streampark_token_management_menu](/doc/image/platform-usage/31_streampark_token_management_menu.png)

![32_streampark_token_management_menu_usage](/doc/image/platform-usage/32_streampark_token_management_menu_usage.png)

```bash
curl -X POST '/flink/app/cancel' \
-H 'Authorization: 69qMW7reOXhrAh29LjPWwwP+quFqLf++MbPbsB9/NcTCKGzZE2EU7tBUBU5gqG236VF5pMyVrsE5K7hBWiyuLuJRqmxKdPct4lbGrjZZqkv5lBBYExxYVMIl+f5MZ9dbqqslZifFx3P4A//NYgGwkx5PpizomwkE+oZOqg0+c2apU0UZ9T7Dpnu/tPLk9g5w9q+6ZS2p+rTllPiEgyBnSw==' \
-H 'Content-Type: application/x-www-form-urlencoded; charset=UTF-8' \
--data-urlencode 'savePoint=' \
--data-urlencode 'id=100001' \
--data-urlencode 'savePointed=false' \
--data-urlencode 'drain=false' \
-i
```
### Role Management
> 用户角色：目前有2种，develop 和 admin。

![33_streampark_role_menu](/doc/image/platform-usage/33_streampark_role_menu.png)

### Team Management
> 团队：用于区分管理企业不同团队的作业。

![34_streampark_team_menu](/doc/image/platform-usage/34_streampark_team_menu.png)

### Member Management
> (团队)成员管理

![35_streampark_member_menu](/doc/image/platform-usage/35_streampark_member_menu.png)

### Menu Management
> 管理系统菜单

![36_streampark_menu_management](/doc/image/platform-usage/36_streampark_menu_management.png)

## StreamPark菜单模块
### Project
> StreamPark结合代码仓库实现CICD

![37_streampark_project_menu](/doc/image/platform-usage/37_streampark_project_menu.png)
> 使用时，点击 “+ Add new ”,配置repo信息，保存。

![38_streampark_project_menu_usage_1](/doc/image/platform-usage/38_streampark_project_menu_usage_1.png)

![39_streampark_project_menu_usage_2](/doc/image/platform-usage/39_streampark_project_menu_usage_2.png)

### Application
> **核心模块：用于对 flink job 全生命周期(创建、构建、启动、停止、删除等)管理。**

![40_application_menu](/doc/image/platform-usage/40_application_menu.png)
### Variable
> 变量管理：管理变量，可在Application 作业创建时使用。

![41_variable_menu_usage_1](/doc/image/platform-usage/41_variable_menu_usage_1.png)

![42_variable_menu_usage_2](/doc/image/platform-usage/42_variable_menu_usage_2.png)

![43_variable_menu_usage_3](/doc/image/platform-usage/43_variable_menu_usage_3.png)

### Setting
#### System Setting
> 用于系统配置：Maven 、 Docker 、 alert email、Ingress

![44_system_menu_1](/doc/image/platform-usage/44_system_menu_1.png)

![45_system_menu_2](/doc/image/platform-usage/45_system_menu_2.png)

![46_system_menu_3](/doc/image/platform-usage/46_system_menu_3.png)

![47_system_menu_4](/doc/image/platform-usage/47_system_menu_4.png)

#### Alert Setting
> 支持多种告警通知模式

![48_alert_setting_menu](/doc/image/platform-usage/48_alert_setting_menu.png)

#### Flink Home
> 【**待完善**】可对flink作业进行一些操作，如对flink sql校验等

![49_flink_home_list](/doc/image/platform-usage/49_flink_home_list.png)

![50_flink_home_usage](/doc/image/platform-usage/50_flink_home_usage.png)

![51_flink_home_usage_2](/doc/image/platform-usage/51_flink_home_usage_2.png)

#### Flink Cluster
> - Session模式执行flink作业，根据资源管理方式不同，可以分为3种：Standalone、Yarn、K8s
> - 【**待完善**】应用场景：资源充足，作业之间隔离性需求不是很强的场景
> - 关于session模式，详见：[https://nightlies.apache.org/flink/flink-docs-release-1.14/zh/docs/deployment/overview/#session-mode](https://nightlies.apache.org/flink/flink-docs-release-1.14/zh/docs/deployment/overview/#session-mode)


![52_add_flink_cluster_info](/doc/image/platform-usage/52_add_flink_cluster_info.png)

![53_display_flink_cluster_list](/doc/image/platform-usage/53_display_flink_cluster_list.png)

![54_visit_flink_cluster_web_ui](/doc/image/platform-usage/54_visit_flink_cluster_web_ui.png)

# 原生flink 与 StreamPark关联使用
> 【**待完善**】其实，个人理解，StreamPark一大特点是对flink原生作业的管理模式在用户使用层面进行了优化，使得用户能利用该平台快速开发、部署、运行、监控flink作业。所以，想表达的意思是：如果用户对原生flink比较熟悉的话，那StreamPark使用起来就会更加得心应手。

## flink部署模式
> 下面内容摘自 **张利兵 老师 极客时间专栏** 《[Flink核心技术与实战](https://time.geekbang.org/course/intro/100058801)》

### 原生flink集群部署模式
![55_flink_deployment_difference_1](/doc/image/platform-usage/55_flink_deployment_difference_1.png)

![56_flink_deployment_difference_2](/doc/image/platform-usage/56_flink_deployment_difference_2.png)

![57_flink_deployment_difference_3](/doc/image/platform-usage/57_flink_deployment_difference_3.png)

![58_flink_deployment_difference_4](/doc/image/platform-usage/58_flink_deployment_difference_4.png)

![59_flink_deployment_difference_5](/doc/image/platform-usage/59_flink_deployment_difference_5.png)

![60_flink_deployment_difference_6](/doc/image/platform-usage/60_flink_deployment_difference_6.png)

### 如何在StreamPark中使用
> **Session 模式**

1. 配置 Flink Cluster

![61_flink_session_cluster_usage_1](/doc/image/platform-usage/61_flink_session_cluster_usage_1.png)

2. 创建作业时在 Execution Mode选择对应资源管理器的model 和  已经建立好的Flink Cluster

![62_flink_session_cluster_usage_2](/doc/image/platform-usage/62_flink_session_cluster_usage_2.png)
> **Application 模式**

![63_flink_application_model_usage_1](/doc/image/platform-usage/63_flink_application_model_usage_1.png)

![64_flink_application_model_usage_2](/doc/image/platform-usage/64_flink_application_model_usage_2.png)

![65_flink_application_model_usage_3](/doc/image/platform-usage/65_flink_application_model_usage_3.png)

![66_flink_application_model_usage_4](/doc/image/platform-usage/66_flink_application_model_usage_4.png)

## 设置作业参数
### 原生flink作业参数
> 官网：[https://nightlies.apache.org/flink/flink-docs-release-1.14/zh/docs/deployment/config/](https://nightlies.apache.org/flink/flink-docs-release-1.14/zh/docs/deployment/config/)

> 原生提交命令(含参数)

```bash
flink run-application -t yarn-application \
	-Dyarn.provided.lib.dirs="hdfs://myhdfs/my-remote-flink-dist-dir" \
	hdfs://myhdfs/jars/my-application.jar
```
### 如何在StreamPark中使用
> 创建 或 修改 作业时，在“Dynamic Properties”里面按指定格式添加即可

![67_dynamic_params_usage](/doc/image/platform-usage/67_dynamic_params_usage.png)

## 告警策略
> 【**待完善**】

### 原生flink重启机制
> 参考：[https://nightlies.apache.org/flink/flink-docs-release-1.14/zh/docs/ops/state/task_failure_recovery/](https://nightlies.apache.org/flink/flink-docs-release-1.14/zh/docs/ops/state/task_failure_recovery/)

![68_native_flink_restart_strategy](/doc/image/platform-usage/68_native_flink_restart_strategy.png)

### 如何在StreamPark中使用
> 【**待完善**】一般在作业失败或出现异常时，会触发告警

1. 配置告警通知

![69_streampark_alert_settings_1](/doc/image/platform-usage/69_streampark_alert_settings_1.png)

![70_streampark_alert_settings_2](/doc/image/platform-usage/70_streampark_alert_settings_2.png)

2. 创建 或 修改 作业时，在"Fault Alert Template"、“CheckPoint Failure Options”里面配置即可

![71_streampark_alert_usage](/doc/image/platform-usage/71_streampark_alert_usage.png)

## cp/sp
> 【**待完善**】

### 原生flink checkpoint 和 savepoint
> cp:  [https://nightlies.apache.org/flink/flink-docs-release-1.14/zh/docs/dev/datastream/fault-tolerance/checkpointing/](https://nightlies.apache.org/flink/flink-docs-release-1.14/zh/docs/dev/datastream/fault-tolerance/checkpointing/)
> sp: [https://nightlies.apache.org/flink/flink-docs-release-1.14/zh/docs/ops/state/savepoints/](https://nightlies.apache.org/flink/flink-docs-release-1.14/zh/docs/ops/state/savepoints/)


![72_native_flink_save_checkpoint_gramma](/doc/image/platform-usage/72_native_flink_save_checkpoint_gramma.png)
### 如何在StreamPark中配置savepoint
> 当停止作业时，可以让用户设置savepoint

![73_streampark_save_checkpoint](/doc/image/platform-usage/73_streampark_save_checkpoint.png)

![74_streampark_set_checkpoint_location](/doc/image/platform-usage/74_streampark_set_checkpoint_location.png)

![75_streampark_save_checkpoint_log](/doc/image/platform-usage/75_streampark_save_checkpoint_log.png)

> 查看savepoint

![76_show_checkpoint_file_name](/doc/image/platform-usage/76_show_checkpoint_file_name.png)

![77_show_checkpoint_file_name_2](/doc/image/platform-usage/77_show_checkpoint_file_name_2.png)

### 如何在StreamPark中由指定savepoint恢复作业
> 启动作业时，会让选择

![78_usage_checkpoint_in_streampark](/doc/image/platform-usage/78_usage_checkpoint_in_streampark.png)

## 作业状态
> 【**待完善**】

### 原生flink 作业状态
> 参考：[https://nightlies.apache.org/flink/flink-docs-release-1.14/zh/docs/internals/job_scheduling/#jobmanager-%e6%95%b0%e6%8d%ae%e7%bb%93%e6%9e%84](https://nightlies.apache.org/flink/flink-docs-release-1.14/zh/docs/internals/job_scheduling/#jobmanager-%e6%95%b0%e6%8d%ae%e7%bb%93%e6%9e%84)

![79_native_flink_job_status](/doc/image/platform-usage/79_native_flink_job_status.svg)

### StreamPark中的作业状态
> 【**待完善**】


## 作业详情
### 原生flink作业详情
> 通过 “[Apache Flink Dashboard](http://hadoop:8088/proxy/application_1701871016253_0004/#/)”查看

![80_native_flink_job_details_page](/doc/image/platform-usage/80_native_flink_job_details_page.png)

### StreamPark中作业详情
![81_streampark_flink_job_details_page](/doc/image/platform-usage/81_streampark_flink_job_details_page.png)

> 同时在k8s模式下的作业，StreamPark还支持启动日志实时展示，如下

![82_streampark_flink_job_starting_log_info](/doc/image/platform-usage/82_streampark_flink_job_starting_log_info.png)

## 如何与第三方系统集成
### 原生flink如何与第三方系统集成
> 原生flink提供了 rest api
> 参考：[https://nightlies.apache.org/flink/flink-docs-release-1.14/zh/docs/ops/rest_api/](https://nightlies.apache.org/flink/flink-docs-release-1.14/zh/docs/ops/rest_api/)

### StreamPark如何与第三方系统集成
> 也提供了Restful Api，支持与其他系统对接，
> 比如：开启作业 启动|停止 restapi 接口

![83_streampark_restful_api_1](/doc/image/platform-usage/83_streampark_restful_api_1.png)
![84_streampark_restful_api_2](/doc/image/platform-usage/84_streampark_restful_api_2.png)
