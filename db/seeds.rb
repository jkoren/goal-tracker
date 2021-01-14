# seeds.rb 

colleen = User.create(email: "colleen@gmail.com", password: "testtest")
barbara = User.create(email: "barbara@gmail.com", password: "testtest")
matthew = User.create(email: "matthew@gmail.com", password: "testtest")

task1 = Task.create(title: "Read orientation materials",task_starts_at: DateTime.now, status: 3, user: matthew, time_worked: 114)
task2 = Task.create(title: "Read orientation materials",task_starts_at: DateTime.now, status: 3, user: colleen, time_worked: 37)
task3 = Task.create(title: "Read orientation materials",task_starts_at: DateTime.now, status: 3, user: barbara, time_worked: 134)

task4 = Task.create(title: "Attend office hours",task_starts_at: DateTime.now, status: 2, user: matthew, body: "sample text data explanation", time_worked: 134)

task5 = Task.create(title: "Attend office hours",task_starts_at: DateTime.now, status: 2, user: matthew, time_worked: 119)
task6 = Task.create(title: "Develop ER Diagram",task_starts_at: DateTime.now, status: 1, user: matthew, time_worked: 44)
task7 = Task.create(title: "Create Back End Controller",task_starts_at: DateTime.now, status: 1, user: matthew, time_worked: 47)
task8 = Task.create(title: "Build Index Page",task_starts_at: DateTime.now, status: 1, user: matthew, time_worked: 199)
task9 = Task.create(title: "Build Show Page",task_starts_at: DateTime.now, status: 1, user: matthew, time_worked: 2000)

Hashtag.create(title: "Work", task: task1, color: "red")
Hashtag.create(title: "Health", task: task1, color: "purple")
Hashtag.create(title: "Education", task: task2, color: "green")
Hashtag.create(title: "Work", task: task3, color: "red")
Hashtag.create(title: "Free Time", task: task4, color: "blue")
Hashtag.create(title: "Health", task: task5, color: "purple")
Hashtag.create(title: "Education", task: task6, color: "green")
Hashtag.create(title: "Work", task: task7, color: "red")
Hashtag.create(title: "Free Time", task: task8, color: "blue")
Hashtag.create(title: "Health", task: task9, color: "purple")
Hashtag.create(title: "Education", task: task4, color: "green")
Hashtag.create(title: "Work", task: task5, color: "red")
Hashtag.create(title: "Free Time", task: task6, color: "blue")

