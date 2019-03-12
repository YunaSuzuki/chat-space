# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...

## messageテーブル

|Column|Type|Options|
|------|----|-------|
|id|integer|null: false, foreign_key:true|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|message_text|text|null: false, foreign_key: true|
|image|image|null false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user


## group_chatテーブル

|Column|Type|Options|
|------|----|-------|
|group_id|integer|null: false, foreign_key: true|
|group_name|string|null false, foreign_key: true|


### Association
- has_many :messages
- has_many :users


## userテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|email|string|null: false, foreign_key: true|
|password|string|null: false, foreign_key: true|
|nickname|string|null: false, foreign_key: true|

### Association
- has_many :groups


## membersテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user
