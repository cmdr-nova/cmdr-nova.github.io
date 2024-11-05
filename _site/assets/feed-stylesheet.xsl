<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:output method="html" encoding="UTF-8" />

  <xsl:template match="/">
    <html>
      <head>
        <title>cmdr-nova@internet:~$</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            margin: 20px;
            background-color: #121212;
            color: #e0e0e0;
            padding: 20px;
            box-sizing: border-box;
          }
          .container {
            max-width: 800px;
            margin: 0 auto;
            padding: 20px;
            background-color: #1e1e1e;
            border-radius: 8px;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
          }
          h1 {
            color: #80d8ff;
            text-align: center;
            margin-bottom: 10px;
          }
          .info-bubble {
            background-color: #1e1e1e;
            border: 1px solid #333;
            border-radius: 8px;
            padding: 10px;
            margin-bottom: 20px;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
            text-align: center;
            color: #b0bec5;
          }
          .info-bubble .highlight {
            background-color: #80d8ff;
            color: #121212;
            padding: 2px 4px;
            border-radius: 4px;
          }
          .item {
            background-color: #1e1e1e;
            border: 1px solid #333;
            border-radius: 8px;
            padding: 15px;
            margin-bottom: 20px;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
          }
          .title {
            font-weight: bold;
            font-size: 1.2em;
            margin-bottom: 10px;
            color: #80d8ff;
          }
          .description {
            margin-top: 10px;
            font-size: 1em;
            line-height: 1.6;
            color: #b0bec5;
          }
          .link {
            margin-top: 10px;
          }
          .link a {
            color: #80d8ff;
            text-decoration: none;
            font-weight: bold;
          }
          .link a:hover {
            text-decoration: underline;
          }
          @media (max-width: 600px) {
            body {
              padding: 10px;
            }
            .container {
              padding: 10px;
            }
            .item {
              padding: 10px;
            }
          }
        </style>
      </head>
      <body>
        <div class="container">
          <h1>cmdr-nova@internet:~$</h1>
          <div class="info-bubble">
            Welcome to Nova Feed. You can subscribe to this web feed by copying the URL <span class="highlight">https://nova.mkultra.monster/feed.xml</span> into your reader.
          </div>
          <xsl:for-each select="rss/channel/item">
            <div class="item">
              <div class="title">
                <xsl:value-of select="title" />
              </div>
              <div class="description">
                <xsl:value-of select="description" />
              </div>
              <div class="link">
                <a href="{link}" target="_blank">Read more</a>
              </div>
            </div>
          </xsl:for-each>
        </div>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>