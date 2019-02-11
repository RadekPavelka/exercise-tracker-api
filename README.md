# Exercise Tracker REST API

#### A microservice project, part of Free Code Camp's curriculum

### User Stories

1. I can create a users by posting form data username to /api/exercise/new-users and returned will be an object with username and _id.
2. I can get an array of all users by getting api/exercise/users with the same info as when creating a users.
3. I can add an exercise to any users by posting form data userId(_id), description, duration, and optionally date to /api/exercise/add. If no date supplied it will use current date. Returned will the the users object with also with the exercise fields added.
4. I can retrieve a full exercise log of any users by getting /api/exercise/log with a parameter of userId(_id). Return will be the users object with added array log and count (total exercise count).
5. I can retrieve part of the log of any users by also passing along optional parameters of from & to or limit. (Date format yyyy-mm-dd, limit = int)
