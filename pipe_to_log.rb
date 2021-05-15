# require 'open3'
# Open3.popen3("make plan") do |stdout, stderr, status, thread|
#   while line=stderr.gets do
#     File.open('results.log', 'a') do |f|
#       f.puts "[#{Time.now}] #{line}"
#     end
#   end
# end


require 'open3'
Open3.popen3("rm -rf dummy")
Open3.popen3 "git clone --progress https://github.com/kentan88/dummy.git &> git_clone_#{Time.now.to_i}.file"

Open3.popen3("cd dummy && git log -n 1") do |stdout, stderr, status, thread|
  while line=stderr.gets do
    File.open('results.log', 'a') do |f|
      f.puts "[#{Time.now}] #{line}"
    end
  end
end


# git --no-pager show -s --format='%an <%ae>' COMMIT
# --no-pager supresses the pager
# -s suppresses diff output; short for --no-patch
#                                    %an is the author name
#                                    %ae is the author email
#
# git log -n 1 --format='%an'
#
# -n 1 restricts the log to a single commit.
#
# Does the same as git show --quiet, although I prefer it a bit since it is documented on man git-log while --quiet is not documented on man git-show as of 2.17.
#
# Also note that you can golf even better with show with the short form of --quiet:
#
# git show -q --format='%an'