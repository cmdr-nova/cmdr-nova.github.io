<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:output method="html" encoding="UTF-8" />

  <xsl:template match="/">
    <html>
      <head>
        <title><xsl:value-of select="/rss/channel/title"/></title>
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
          .item {
            margin-bottom: 20px;
            padding: 10px;
            border-bottom: 1px solid #333;
          }
          .item h2 {
            color: #80d8ff;
          }
          .item p {
            margin: 5px 0;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <h1><xsl:value-of select="/rss/channel/title"/></h1>
          <xsl:for-each select="/rss/channel/item">
            <div class="item">
              <h2><xsl:value-of select="title"/></h2>
              <div><xsl:value-of select="content:encoded" disable-output-escaping="yes"/></div>
              <p><small>Published on: <xsl:value-of select="pubDate"/></small></p>
            </div>
          </xsl:for-each>
        </div>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>