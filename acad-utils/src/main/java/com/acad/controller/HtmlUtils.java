package com.acad.controller;

import javax.servlet.http.HttpServletResponse;
import java.io.UnsupportedEncodingException;
import java.nio.charset.Charset;
import java.util.regex.Pattern;

import static java.net.URLEncoder.encode;

/**
 * All rights reserved by (c) Schema Design Solutions.
 * Created by omuliarevych on 6/16/17.
 *
 * Helper for processing response.
 */
public class HtmlUtils {

    /**
     * Method fills passed-in {@code response} with HttpHeader, which represent information about passed via stream
     * file with name information including extension and encoding (UTF-8).
     * @param response - {@link HttpServletResponse}, which header will be updated with information about file sent
     *                 via OutputStream to client.
     * @param fileName - the name of file sent to client via OutputStream.
     */
    public static void setContentDispositionFilename(HttpServletResponse response, String fileName)
            throws UnsupportedEncodingException {
        // Escape space as '%20', not '+'
        String encodedFileName = Pattern.compile("\\+")
                .matcher(encode(fileName, Charset.forName("UTF-8").displayName())).replaceAll("%20");
        response.setHeader(org.springframework.http.HttpHeaders.CONTENT_DISPOSITION, "attachment; " +
                "fileName=\"" + encodedFileName + "\"; " +
                "fileName*=" + Charset.forName("UTF-8").displayName() + "''" + encodedFileName);
    }
}
