# Quick Start
> Note: This section is designed to provide a convenient process for submitting Flink jobs using the StreamPark platform through simple operational steps.

## Configure FLINK_HOME
![1_config_flink_home](/doc/image_en/platform-usage/1_config_flink_home.png)

![2_add_flink_home_info](/doc/image_en/platform-usage/2_add_flink_home_info.png)
> Click "OK" to save

![3_display_flink_home_config](/doc/image_en/platform-usage/3_display_flink_home_config.png)
## Configure Flink Cluster
> Depending on the Flink deployment mode and resource management method, StreamPark supports the following six job modes:
> - **Standalone Session**
> - **Yarn Session**
> - **Yarn Per-job**
> - **Yarn Application**
> - **K8s Session**
> - **K8s Application**
>
For this guide, choose the simpler Standalone Session mode (**indicated by the green line in the image below**) for a quick start.

![4_flink_deployment_execute_model](/doc/image_en/platform-usage/4_flink_deployment_execute_model.png)

### Start Flink Standalone Session on Server
```bash
start-cluster.sh
```
![5_start_flink_standalone_session_service](/doc/image_en/platform-usage/5_start_flink_standalone_session_service.png)
> Page access: [http://vm:8081/](http://vm:8081/)

![6_flink_standalone_session_web_ui](/doc/image_en/platform-usage/6_flink_standalone_session_web_ui.png)
### Configure Flink Cluster
![7_config_flink_cluster_menu.png](/doc/image_en/platform-usage/7_config_flink_cluster_menu.png)

![8_add_flink_cluster_info.png](/doc/image_en/platform-usage/8_add_flink_cluster_info.png)

![9_add_flink_cluster_successfully](/doc/image_en/platform-usage/9_add_flink_cluster_successfully.png)

![10_display_flink_cluster_list](/doc/image_en/platform-usage/10_display_flink_cluster_list.png)

## Create Job
![11_add_flink_job_menu](/doc/image_en/platform-usage/11_add_flink_job_menu.png)
### Main Parameters
> - Development Mode: Choose “Flink SQL”
> - Execution Mode: Choose “remote”
> - Flink Version: Select "flink-1.17", as configured in “1.1 Configure FLINK_HOME”
> - Flink Cluster: Select “myStandalonSession”, as configured in “1.2 Configure FLINK Cluster”
> - Flink SQL: See example below
> - Application Name: Job name

### Create Job
![12_add_flink_job_param_1](/doc/image_en/platform-usage/12_add_flink_job_param_1.png)

![13_add_flink_job_param_2](/doc/image_en/platform-usage/13_add_flink_job_param_2.png)

![14_add_flink_job_param_3](/doc/image_en/platform-usage/14_add_flink_job_param_3.png)

### Save Job
> Click the blue “Submit” button to submit the job

![15_save_flink_job](/doc/image_en/platform-usage/15_save_flink_job.png)

![16_display_flink_job_list](/doc/image_en/platform-usage/16_display_flink_job_list.png)

## Build Job
![17_build_flink_job](/doc/image_en/platform-usage/17_build_flink_job.png)
> Build successful

![18_build_flink_job_successfully](/doc/image_en/platform-usage/18_build_flink_job_successfully.png)

## Start Job
![19_start_flink_job](/doc/image_en/platform-usage/19_start_flink_job.png)

### Start Checkpoint Settings
![20_set_checkpoint_when_start_flink_job](/doc/image_en/platform-usage/20_set_checkpoint_when_start_flink_job.png)

### Submit Job
![21_submit_flink_job_1](/doc/image_en/platform-usage/21_submit_flink_job_1.png)
![22_submit_flink_job_2](/doc/image_en/platform-usage/22_submit_flink_job_2.png)

## Check Job Status
### View via StreamPark Dashboard
> StreamPark dashboard

![23_flink_job_dashboard](/doc/image_en/platform-usage/23_flink_job_dashboard.png)

> View job details

![24_display_flink_job_details](/doc/image_en/platform-usage/24_display_flink_job_details.png)

![25_display_flink_job_details_page](/doc/image_en/platform-usage/25_display_flink_job_details_page.png)

### View Native Flink Web UI
![26_display_native_flink_job_web_ui](/doc/image_en/platform-usage/26_display_native_flink_job_web_ui.png)

![27_display_native_flink_job_web_ui_2](/doc/image_en/platform-usage/27_display_native_flink_job

_web_ui_2.png)

> With this, the process of submitting a Flink job using the StreamPark platform is essentially complete. Below is a brief summary of the general process for managing Flink jobs on the StreamPark platform.

## StreamPark Platform's Process for Managing Flink Jobs
![28_streampark_process_workflow](/doc/image_en/platform-usage/28_streampark_process_workflow.png)

> Stopping, modifying, and deleting Flink jobs through the StreamPark platform is relatively simple and can be experienced by users themselves. It is worth noting that: **If a job is in a running state, it cannot be deleted and must be stopped first**.

# StreamPark System Module Introduction
## System Settings
> Menu location

![29_streampark_system_menu](/doc/image_en/platform-usage/29_streampark_system_menu.png)

### User Management
> For managing users of the StreamPark platform

![30_streampark_user_management_menu](/doc/image_en/platform-usage/30_streampark_user_management_menu.png)
### Token Management
> Allows users to operate Flink jobs in the form of Restful APIs

![31_streampark_token_management_menu](/doc/image_en/platform-usage/31_streampark_token_management_menu.png)

![32_streampark_token_management_menu_usage](/doc/image_en/platform-usage/32_streampark_token_management_menu_usage.png)

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
> User roles: Currently, there are two types, develop and admin.

![33_streampark_role_menu](/doc/image_en/platform-usage/33_streampark_role_menu.png)

### Team Management
> Teams: Used to distinguish and manage jobs of different teams in an enterprise.

![34_streampark_team_menu](/doc/image_en/platform-usage/34_streampark_team_menu.png)

### Member Management
> (Team) member management

![35_streampark_member_menu](/doc/image_en/platform-usage/35_streampark_member_menu.png)

### Menu Management
> Managing system menus

![36_streampark_menu_management](/doc/image_en/platform-usage/36_streampark_menu_management.png)

## StreamPark Menu Modules
### Project
> StreamPark integrates with code repositories to achieve CICD

![37_streampark_project_menu](/doc/image_en/platform-usage/37_streampark_project_menu.png)
> To use, click "+ Add new," configure repo information, and save.

![38_streampark_project_menu_usage_1](/doc/image_en/platform-usage/38_streampark_project_menu_usage_1.png)

![39_streampark_project_menu_usage_2](/doc/image_en/platform-usage/39_streampark_project_menu_usage_2.png)

### Application
> **Core Module: Used for full lifecycle management (creation, build, start, stop, delete, etc.) of Flink jobs.**

![40_application_menu](/doc/image_en/platform-usage/40_application_menu.png)
### Variable
> Variable management: Manage variables that can be used when creating Application jobs.

![41_variable_menu_usage_1](/doc/image_en/platform-usage/41_variable_menu_usage_1.png)

![42_variable_menu_usage_2](/doc/image_en/platform-usage/42_variable_menu_usage_2.png)

![43_variable_menu_usage_3](/doc/image_en/platform-usage/43_variable_menu_usage_3.png)

### Setting
#### System Setting
> For system configurations: Maven, Docker, alert email, Ingress

![44_system_menu_1](/doc/image_en/platform-usage/44_system_menu_1.png)

![45_system_menu_2](/doc/image_en/platform-usage/45_system_menu_2.png)

![46_system_menu_3](/doc/image_en/platform-usage/46_system_menu_3.png)

![47_system_menu_4](/doc/image_en/platform-usage/47_system_menu_4.png)

#### Alert Setting
> Supports multiple alert notification modes

![48_alert_setting_menu](/doc/image_en/platform-usage/48_alert_setting_menu.png)

#### Flink Home
> 【**To be improved**】Can perform some operations on Flink jobs, such as validation of Flink SQL, etc.

![49_flink_home_list](/doc/image_en/platform-usage/49_flink_home_list.png)

![50_flink_home_usage](/doc/image_en/platform-usage/50_flink_home_usage.png)

![51_flink_home_usage_2](/doc/image_en/platform-usage/51_flink_home_usage_2.png)

#### Flink Cluster
> - For executing Flink jobs in Session mode, there are three types based on different resource management methods: Standalone, Yarn, K8s
> - 【**To be improved**】Application scenario: Suitable for scenarios with sufficient resources and where job isolation requirements are not very strict
> - For more on session mode, see: [https://nightlies.apache.org/flink/flink-docs-release-1.17/docs/deployment/overview/#session-mode](https://nightlies.apache.org/flink/flink-docs-release-1.17/docs/deployment/overview/#session-mode)


![52_add_flink_cluster_info](/doc/image_en/platform-usage/52_add_flink_cluster_info.png)

![53_display_flink_cluster_list](/doc/image_en/platform-usage/53_display_flink_cluster_list.png)

![54_visit_flink_cluster_web_ui](/doc/image_en/platform-usage/54_visit_flink_cluster_web_ui.png)

# Using Native Flink with StreamPark
> 【**To be improved**】In fact, a key feature of StreamPark is the optimization of the management mode for native Flink jobs at the user level, enabling users to rapidly develop, deploy, run, and monitor Flink jobs using the platform. Meaning, if users are familiar with native Flink, they will find StreamPark even more intuitive to use.

## Flink Deployment Modes
### How to Use in StreamPark
> **Session Mode**

1. Configure Flink Cluster

![61_flink_session_cluster_usage_1](/doc/image_en/platform-usage/61_flink_session_cluster_usage_1.png)

2. When creating a job, select the corresponding resource manager's model and an established Flink Cluster in Execution Mode

![62_flink_session_cluster_usage_2](/doc/image_en/platform-usage/62_flink_session_cluster_usage_2.png)
> **Application Mode**

![63_flink_application_model_usage_1](/doc/image_en/platform-usage/63_flink_application_model_usage_1.png)

![64_flink_application_model_usage_2](/doc/image_en/platform-usage/64_flink_application_model_usage_2.png)

![65_flink_application_model_usage_3](/doc/image_en/platform-usage/65_flink_application_model_usage_3.png)

![66_flink_application_model_usage_4](/doc/image_en/platform-usage/66_flink_application_model_usage_4.png)

## Setting Job Parameters
### Native Flink Job Parameters
> Official website: [https://nightlies.apache.org/flink/flink-docs-release-1.17/docs/deployment/config/](https://nightlies.apache.org/flink/flink-docs-release-1.17/docs/deployment/config/)

> Native submission command (with parameters)

```bash
flink run-application -t yarn-application \
	-Dyarn.provided.lib.dirs="hdfs://myhdfs/my-remote-flink-dist-dir" \
	hdfs://myhdfs/jars/my-application.jar
```
### How to Use in StreamPark
> When creating or modifying a job, add in “Dynamic Properties” as per the specified format

![67_dynamic_params_usage](/doc/image_en/platform-usage/67_dynamic_params_usage.png)

## Alert Strategy
> 【**To be improved**】

### Native Flink Restart Mechanism
> Reference: [https://nightlies.apache.org/flink/flink-docs-release-1.17/docs/ops/state/task_failure_recovery/](https://nightlies.apache.org/flink/flink-docs-release-1.17/docs/ops/state/task_failure_recovery/)

![68_native_flink_restart_strategy](/doc/image_en/platform-usage/68_native_flink_restart_strategy.png)

### How to Use in StreamPark
> 【**To be improved**】Generally, alerts are triggered when a job fails or an anomaly occurs

1. Configure alert notifications

![69_streampark_alert_settings_1](/doc/image_en/platform-usage/69_streampark_alert_settings_1.png)

![70_streampark_alert_settings_2](/doc/image_en/platform-usage/70_streampark_alert_settings_2.png)

2. When creating or modifying a job, configure in "Fault Alert Template" and “CheckPoint Failure Options”

![71_streampark_alert_usage](/doc/image_en/platform-usage/71_streampark_alert_usage.png)

## cp/sp
> 【**To be improved**】

### Native Flink Checkpoint and Savepoint
> cp: [https://nightlies.apache.org/flink/flink-docs-release-1.17/docs/dev/datastream/fault-tolerance/checkpointing/](https://nightlies.apache.org/flink/flink-docs-release-1.17/docs/dev/datastream/fault-tolerance/checkpointing/)
> sp: [https://nightlies.apache.org/flink/flink-docs-release-1.17/docs/ops/state/savepoints/](https://nightlies.apache.org/flink/flink-docs-release-1.17/docs/ops/state/savepoints/)


![72_native_flink_save_checkpoint_gramma](/doc/image_en/platform-usage/72_native_flink_save_checkpoint_gramma.png)
### How to Configure Savepoint in StreamPark
> Users can set a savepoint when stopping a job

![73_streampark_save_checkpoint](/doc/image_en/platform-usage/73_streampark_save_checkpoint.png)

![74_streampark_set_checkpoint_location](/doc/image_en/platform-usage/74_streampark_set_checkpoint_location.png)

![75_streampark_save_checkpoint_log](/doc/image_en/platform-usage/75_streampark_save_checkpoint_log.png)

> View savepoint

![76_show_checkpoint_file_name](/doc/image_en/platform-usage/76_show_checkpoint_file_name.png)

![77_show_checkpoint_file_name_2](/doc/image_en/platform-usage/77_show_checkpoint_file_name_2.png)

### How to Restore a Job from a Specified Savepoint in StreamPark
> Users have the option to choose during job startup

![78_usage_checkpoint_in_streampark](/doc/image_en/platform-usage/78_usage_checkpoint_in_streampark.png)

## Job Status
> 【**To be improved**】

### Native Flink Job Status
> Reference: [https://nightlies.apache.org/flink/flink-docs-release-1.17/docs/internals/job_scheduling/#jobmanager-data-structures](https://nightlies.apache.org/flink/flink-docs-release-1.17/docs/internals/job_scheduling/#jobmanager-data-structures)

![79_native_flink_job_status](/doc/image_en/platform-usage/79_native_flink_job_status.svg)

### Job Status in StreamPark
> 【**To be improved**】


## Job Details
### Native Flink Job Details
> View through “[Apache Flink Dashboard](http://hadoop:8088/proxy/application_1701871016253_0004/#/)”

![80_native_flink_job_details_page](/doc/image_en/platform-usage/80_native_flink_job_details_page.png)

### Job Details in StreamPark
![81_streampark_flink_job_details_page](/doc/image_en/platform-usage/81_streampark_flink_job_details_page.png)

> In addition, for jobs in k8s mode, StreamPark also supports real-time display of startup logs, as shown below

![82_streampark_flink_job_starting_log_info](/doc/image_en/platform-usage/82_streampark_flink_job_starting_log_info.png)

## Integration with Third-Party Systems
### How Native Flink Integrates with Third-Party Systems
> Native Flink provides a REST API
> Reference: [https://nightlies.apache.org/flink/flink-docs-release-1.17/docs/ops/rest_api/](https://nightlies.apache.org/flink/flink-docs-release-1.17/docs/ops/rest_api/)

### How StreamPark Integrates with Third-Party Systems
> StreamPark also provides Restful APIs, supporting integration with other systems.
> For example, it offers REST API interfaces for starting and stopping jobs.

![83_streampark_restful_api_1](/doc/image_en/platform-usage/83_streampark_restful_api_1.png)
![84_streampark_restful_api_2](/doc/image_en/platform-usage/84_streampark_restful_api_2.png)
