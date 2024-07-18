<?xml version="1.0" encoding="utf-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:template match="autoliste">
        <html>
            <head>
                <meta charset="UTF-8"/>
                <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css"/>
            </head>
            <body>
                <div class="container-fluid p-0">

                    <table class="table table-dark table-hover">
                        <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Fahrzeugmarke</th>
                                    <th>Model</th>
                                    <th>Farbe</th>
                                    <th>Baujahr</th>
                                    <th>Einkaufspreis</th>
                                    <th>Verkaufspreis</th>
                                    <th>Status</th>
                                </tr>
                        </thead>
                        <tbody>
                            <xsl:for-each select="auto">
                                    <tr>
                                        <td><xsl:value-of select="id"/></td>
                                        <td><xsl:value-of select="marke"/></td>
                                        <td><xsl:value-of select="model"/></td>
                                        <td><xsl:value-of select="farbe"/></td>
                                        <td><xsl:value-of select="baujahr"/></td>
                                        <td><xsl:value-of select="einkaufspreis"/></td>
                                        <td><xsl:value-of select="verkaufspreis"/></td>
                                        <td><xsl:value-of select="status"/></td>
                                    </tr>
                            </xsl:for-each>
                        </tbody>
                    </table>
                </div>
            </body>
        </html>
    </xsl:template>
</xsl:stylesheet>