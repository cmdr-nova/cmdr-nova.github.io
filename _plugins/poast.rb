Jekyll::Hooks.register :posts, :post_write do |post|
    post_content = "New post published: #{post.data['title']} - #{post.url}"
    system("ssh root@67.205.188.225 'python3 /masto-poast/poast.py \"#{post_content}\"'")
  end