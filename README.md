## Stretching Alert

GitHub Actions를 이용해 특정 시간에 슬랙으로 스트레칭을 권유하는 메세지를 보냅니다.  
사무실 책상에서 하루를 보내는 분들에게 틈틈이 몸을 풀 여유를 가지자는 취지에서 만들었습니다. 💪

아래의 사용법을 보고 따라해 **회사의 인싸** 👩‍💻🧑‍💻👨‍💻 가 되어보세요!

### 사용법

#### 1. 프로젝트 복제

<!--
![image](https://user-images.githubusercontent.com/20104232/78853916-09029c00-7a5b-11ea-9d24-8651a20c0bc3.png)

화면 우측의 `Fork`를 클릭해 자신의 프로젝트로 복제해주세요.
 -->

~~Fork 를 사용하는 경우 Actions 실행이 아직 안되는 것 같습니다. ([Github Staff 댓글](https://github.community/t5/GitHub-Actions/How-to-run-and-enable-GitHub-actions-on-forked-repo-with-github/m-p/41676/highlight/true#M4706))~~

Github에서 레포지토리를 생성 후 아래처럼 프로젝트를 클론해 자신의 레포지토리에 올립니다.

```bash
$ git clone https://github.com/bum752/stretching-alert.git
$ cd stretching-alert
$ git remote add my-repo https://github.com/{YOUR_USERNAME}/{YOUR_REPOSITORY}
$ git push my-repo master
```

#### 2. Secrets 설정

![image](https://user-images.githubusercontent.com/20104232/78854006-46672980-7a5b-11ea-9a16-f41f80d2de13.png)

복제된 레포지토리의 `Settings` > `Secrets` 메뉴에서

- `WEBHOOK_URL` (Required) : Slack Incoming Webhook URL (아래에 설정 방법이 있습니다.)
- `ALERT_MESSAGE` (Optional) : 알림을 발송할 메세지 (default: <!here> 스트레칭 할 시간입니다.)

두 가지 항목을 추가해주세요.

#### 2.1 Slack Incoming Webhook

🤔 Incoming Webhook은 슬랙의 App 설정에서 추가할 수 있습니다.

![image](https://user-images.githubusercontent.com/20104232/78854251-ca211600-7a5b-11ea-829c-df8185481e42.png)

채널을 지정하면 아래와 같이 `Webhook URL` 을 확인할 수 있습니다.
![image](https://user-images.githubusercontent.com/20104232/78854329-fdfc3b80-7a5b-11ea-83b5-f3318bd078e9.png)

위의 URL을 GitHub의 Secrets에 저장해주세요.

![image](https://user-images.githubusercontent.com/20104232/78854410-3865d880-7a5c-11ea-9cba-77815b2f2688.png)

#### 3. 알림 시간 설정

이 프로젝트는 월~금요일에 아래 시간에 메세지를 발송합니다.

- 10:50
- 11:50
- 14:50
- 15:50
- 16:50
- 17:50

수정을 원하신다면 [Github Actions Workflow](./.github/workflows/alert.yml)의 cron 시간을 수정해주세요!  
(UTC를 사용하기 때문에 한국시간을 기준으로 -9시간을 해줘야 합니다.)

아래의 사이트를 활용해서 cron 표현식을 좀 더 쉽게 만들 수 있습니다.

- https://crontab.guru/
- https://crontab-generator.org/
