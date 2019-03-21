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

## userテーブル

|Column|Type|Options|
|------|----|-------|
|nickname|integer|null: false, add_index|
|email|string|null: false, unique_key: true|
|password|string|null: false, unique_key: true|

### Association
- has_many :groups, through: :members
- has_many :contents, through: :members


## groupsテーブル

|Column|Type|Options|
|------|----|-------|
|name|string|null: false, add_index|

### Association
- has_many :users, through: :members
- has_many :contents



## membersテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|


### Association
- belongs_to :user
- belongs_to :group


## contentテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false|
|group_id|integer|null: false|
|content|text|null: false|
|image|string|null: true|

### Association
- belongs_to :group
- belongs_to :user

