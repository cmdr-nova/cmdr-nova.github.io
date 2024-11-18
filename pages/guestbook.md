---
layout: page
title: Guestbook
permalink: /pages/guestbook/
---

<div class="guestbook-form">
  <h2>Leave a Comment</h2>
  <form id="guestbookForm">
    <label for="name">Name:</label>
    <input type="text" id="name" name="name" required><br><br>
    <label for="website">Website:</label>
    <input type="url" id="website" name="website"><br><br>
    <label for="message">Message:</label><br>
    <textarea id="message" name="message" rows="4" required></textarea><br><br>
    <button type="submit">Submit</button>
  </form>
</div>
<div class="guestbook-comments">
  <h2>Comments</h2>
  <div id="commentsList"></div>
  <div class="pagination" id="pagination"></div>
</div>

<script src="/assets/js/comments.js"></script>