<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
  <xsl:template match="classes">
    <table>
      <tr>
        <th>Class Name</th>
        <th>Class Time</th>
        <th>Class Location</th>
      </tr>
      <xsl:for-each select="class">
        <tr>
          <td><xsl:value-of select="name" /></td>
          <td><xsl:value-of select="time" /></td>
          <td><xsl:value-of select="location" /></td>
        </tr>
      </xsl:for-each>
    </table>
  </xsl:template>
</xsl:stylesheet>
