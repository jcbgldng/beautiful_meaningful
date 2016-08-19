task :default do
  exec('rake -T')
end

desc "Deploy the current version of the game"
task :deploy do
  command = 'git subtree push --prefix public origin gh-pages'
  puts command
  system(command)
end