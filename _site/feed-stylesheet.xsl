<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:output method="html" encoding="UTF-8" />

  <xsl:template match="/">
    <html>
      <head>
        <title>XML Feed</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            margin: 20px;
          }
          h1 {
            color: #0099ff;
          }
          .item {
            margin-bottom: 20px;
          }
          .title {
            font-weight: bold;
            font-size: 1.2em;
          }
          .description {
            margin-top: 10px;
          }
        </style>
      </head>
      <body>
        <h1>XML Feed</h1>
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
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>