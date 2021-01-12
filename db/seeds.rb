# seeds.rb 

colleen = User.create(email: "colleen@gmail.com", password: "testtest")
barbara = User.create(email: "barbara@gmail.com", password: "testtest")
matthew = User.create(email: "matthew@gmail.com", password: "testtest")

task1 = Task.create(title: "Read orientation materials",task_starts_at: DateTime.now, status: 3, user: matthew)
task2 = Task.create(title: "Read orientation materials",task_starts_at: DateTime.now, status: 3, user: colleen)
Task.create(title: "Read orientation materials",task_starts_at: DateTime.now, status: 3, user: barbara)

Task.create(title: "Attend office hours",task_starts_at: DateTime.now, status: 2, user: matthew, body: "sample text data explanation")
Task.create(title: "Attend office hours",task_starts_at: DateTime.now, status: 2, user: matthew)
Task.create(title: "Develop ER Diagram",task_starts_at: DateTime.now, status: 1, user: matthew)
Task.create(title: "Create Back End Controller",task_starts_at: DateTime.now, status: 1, user: matthew)
Task.create(title: "Build Index Page",task_starts_at: DateTime.now, status: 1, user: matthew)
Task.create(title: "Build Show Page",task_starts_at: DateTime.now, status: 1, user: matthew)

Hashtag.create(title: "Danger", task: task1)
Hashtag.create(title: "Caution", task: task1)
Hashtag.create(title: "Go", task: task1)
Hashtag.create(title: "Danger", task: task2)
Hashtag.create(title: "Fughedaboutit", task: task2)

