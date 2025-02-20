<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:output method="html" encoding="UTF-8" indent="yes"/>
  <xsl:template match="/">
    <html>
      <head>
        <title>Nova Feed</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            margin: 0;
            padding: 0;
            background-color: #1C1C1C;
            background-image: url('/img/spacebg.gif');
            color: #FFFFFF;
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
          }
          .container {
            width: 90%;
            max-width: 800px;
            margin: 20px;
            padding: 20px;
            background-color: #2C2C2C;
            border-radius: 10px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
          }
          h1 {
            color: #FFFFFF;
            text-align: center;
          }
          .subscribe-box {
            background-color: #333;
            padding: 10px;
            border-radius: 10px;
            text-align: center;
            margin-bottom: 20px;
          }
          .item {
            margin-bottom: 20px;
            padding: 10px;
            border-bottom: 1px solid #444;
          }
          .item-title {
            font-size: 1.2em;
            font-weight: bold;
          }
          a {
            color: #1E90FF;
            text-decoration: none;
          }
          a:visited {
            color:rgb(63, 156, 71);
          }
          .item-link {
            color: #1E90FF;
            text-decoration: none;
          }
          .item-link:hover {
            text-decoration: underline;
          }
          .item-link:visited {
            color:rgb(63, 156, 71);
          }
          .item-description {
            margin-top: 10px;
          }
          .item-pubDate {
            font-size: 0.9em;
            color: #AAAAAA;
          }
          @media (max-width: 600px) {
            .container {
              width: 100%;
              margin: 10px;
              padding: 10px;
            }
            .item-title {
              font-size: 1em;
            }
          }
        </style>
      </head>
      <body>
        <div class="container">
          <h1>cmdr-nova @ internet:~$: Nova Prime ░</h1>
          <div class="subscribe-box">
            <p>Subscribe to this feed with this url: <a href="https://mkultra.monster/rss_feed.xml" class="item-link">https://mkultra.monster/rss_feed.xml</a></p>
            <p>This blog is run independently from a garage on Jupiter's moon, Io. Gotcha. You really thought I was being serious? Anyway, check out my <a href="https://www.patreon.com/c/cmdr_nova" target="_blank">Patreon</a>.</p>

            <p>Visit the full website <a href="https://mkultra.monster">here</a>.</p>
          </div>
          <xsl:for-each select="rss/channel/item[position() &lt;= 10]">
            <div class="item">
              <div class="item-title">
                <a class="item-link" href="{link}">
                  <xsl:value-of select="title"/>
                </a>
              </div>
              <div class="item-description">
                <xsl:copy-of select="description/node()"/>
              </div>
              <div class="item-pubDate">
                <xsl:value-of select="pubDate"/>
              </div>
            </div>
          </xsl:for-each>
        </div>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>