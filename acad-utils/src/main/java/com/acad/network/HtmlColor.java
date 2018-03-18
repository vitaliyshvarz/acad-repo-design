package com.acad.network;

import com.acad.utils.IIndexable;

import java.awt.*;

import static java.lang.Integer.parseInt;

@SuppressWarnings("SpellCheckingInspection")
public enum HtmlColor implements IIndexable<String> {

    @SuppressWarnings("unused")
    ALICEBLUE("#F0F8FF"),

    @SuppressWarnings("unused")
    ANTIQUEWHITE("#FAEBD7"),

    @SuppressWarnings("unused")
    AQUA("#00FFFF"),

    @SuppressWarnings("unused")
    AQUAMARINE("#7FFFD4"),

    @SuppressWarnings("unused")
    AZURE("#F0FFFF"),

    @SuppressWarnings("unused")
    BEIGE("#F5F5DC"),

    @SuppressWarnings("unused")
    BISQUE("#FFE4C4"),

    @SuppressWarnings("unused")
    BLACK("#000000"),

    @SuppressWarnings("unused")
    BLANCHEDALMOND("#FFEBCD"),

    @SuppressWarnings("unused")
    BLUE("#0000FF"),

    @SuppressWarnings("unused")
    BLUEVIOLET("#8A2BE2"),

    @SuppressWarnings("unused")
    BROWN("#A52A2A"),

    @SuppressWarnings("unused")
    BURLYWOOD("#DEB887"),

    @SuppressWarnings("unused")
    CADETBLUE("#5F9EA0"),

    @SuppressWarnings("unused")
    CHARTREUSE("#7FFF00"),

    @SuppressWarnings("unused")
    CHOCOLATE("#D2691E"),

    @SuppressWarnings("unused")
    CORAL("#FF7F50"),

    @SuppressWarnings("unused")
    CORNFLOWERBLUE("#6495ED"),

    @SuppressWarnings("unused")
    CORNSILK("#FFF8DC"),

    @SuppressWarnings("unused")
    CRIMSON("#DC143C"),

    @SuppressWarnings("unused")
    CYAN("#00FFFF"),

    @SuppressWarnings("unused")
    DARKBLUE("#00008B"),

    @SuppressWarnings("unused")
    DARKCYAN("#008B8B"),

    @SuppressWarnings("unused")
    DARKGOLDENROD("#B8860B"),

    @SuppressWarnings("unused")
    DARKGRAY("#A9A9A9"),

    @SuppressWarnings("unused")
    DARKGREEN("#006400"),

    @SuppressWarnings("unused")
    DARKGREY("#A9A9A9"),

    @SuppressWarnings("unused")
    DARKKHAKI("#BDB76B"),

    @SuppressWarnings("unused")
    DARKMAGENTA("#8B008B"),

    @SuppressWarnings("unused")
    DARKOLIVEGREEN("#556B2F"),

    @SuppressWarnings("unused")
    DARKORANGE("#FF8C00"),

    @SuppressWarnings("unused")
    DARKORCHID("#9932CC"),

    @SuppressWarnings("unused")
    DARKRED("#8B0000"),

    @SuppressWarnings("unused")
    DARKSALMON("#E9967A"),

    @SuppressWarnings("unused")
    DARKSEAGREEN("#8FBC8F"),

    @SuppressWarnings("unused")
    DARKSLATEBLUE("#483D8B"),

    @SuppressWarnings("unused")
    DARKSLATEGRAY("#2F4F4F"),

    @SuppressWarnings("unused")
    DARKSLATEGREY("#2F4F4F"),

    @SuppressWarnings("unused")
    DARKTURQUOISE("#00CED1"),

    @SuppressWarnings("unused")
    DARKVIOLET("#9400D3"),

    @SuppressWarnings("unused")
    DARKPINK("#FF1493"),

    @SuppressWarnings("unused")
    DARKSKYBLUE("#00BFFF"),

    @SuppressWarnings("unused")
    DIMGRAY("#696969"),

    @SuppressWarnings("unused")
    DIMGREY("#696969"),

    @SuppressWarnings("unused")
    DODGERBLUE("#1E90FF"),

    @SuppressWarnings("unused")
    FIREBRICK("#B22222"),

    @SuppressWarnings("unused")
    FLORALWHITE("#FFFAF0"),

    @SuppressWarnings("unused")
    FORESTGREEN("#228B22"),

    @SuppressWarnings("unused")
    FUCHSIA("#FF00FF"),

    @SuppressWarnings("unused")
    GAINSBORO("#DCDCDC"),

    @SuppressWarnings("unused")
    GHOSTWHITE("#F8F8FF"),

    @SuppressWarnings("unused")
    GOLD("#FFD700"),

    @SuppressWarnings("unused")
    GOLDENROD("#DAA520"),

    @SuppressWarnings("unused")
    GRAY("#808080"),

    @SuppressWarnings("unused")
    GREEN("#008000"),

    @SuppressWarnings("unused")
    GREENYELLOW("#ADFF2F"),

    @SuppressWarnings("unused")
    GREY("#808080"),

    @SuppressWarnings("unused")
    HONEYDEW("#F0FFF0"),

    @SuppressWarnings("unused")
    HOTPINK("#FF69B4"),

    @SuppressWarnings("unused")
    INDIANRED("#CD5C5C"),

    @SuppressWarnings("unused")
    INDIGO("#4B0082"),

    @SuppressWarnings("unused")
    IVORY("#FFFFF0"),

    @SuppressWarnings("unused")
    KHAKI("#F0E68C"),

    @SuppressWarnings("unused")
    LAVENDER("#E6E6FA"),

    @SuppressWarnings("unused")
    LAVENDERBLUSH("#FFF0F5"),

    @SuppressWarnings("unused")
    LAWNGREEN("#7CFC00"),

    @SuppressWarnings("unused")
    LEMONCHIFFON("#FFFACD"),

    @SuppressWarnings("unused")
    LIGHTBLUE("#ADD8E6"),

    @SuppressWarnings("unused")
    LIGHTCORAL("#F08080"),

    @SuppressWarnings("unused")
    LIGHTCYAB("#E0FFFF"),

    @SuppressWarnings("unused")
    LIGHTGOLDENRODYELLOW("#FAFAD2"),

    @SuppressWarnings("unused")
    LIGHTGRAY("#D3D3D3"),

    @SuppressWarnings("unused")
    LIGHTGREEN("#90EE90"),

    @SuppressWarnings("unused")
    LIGHTGREY("#D3D3D3"),

    @SuppressWarnings("unused")
    LIGHTPINK("#FFB6C1"),

    @SuppressWarnings("unused")
    LIGHTSALMON("#FFA07A"),

    @SuppressWarnings("unused")
    LIGHTSEAGREEN("#20B2AA"),

    @SuppressWarnings("unused")
    LIGHTSKYBLUE("#87CEFA"),

    @SuppressWarnings("unused")
    LIGHTSLATEGRAY("#778899"),

    @SuppressWarnings("unused")
    LIGHTSLATEGREY("#778899"),

    @SuppressWarnings("unused")
    LIGHTSTEELBLUE("#B0C4DE"),

    @SuppressWarnings("unused")
    LIGHTYELLOW("#FFFFE0"),

    @SuppressWarnings("unused")
    LIME("#00FF00"),

    @SuppressWarnings("unused")
    LIMEGREEN("#32CD32"),

    @SuppressWarnings("unused")
    LINEN("#FAF0E6"),

    @SuppressWarnings("unused")
    MAGENTA("#FF00FF"),

    @SuppressWarnings("unused")
    MAROON("#800000"),

    @SuppressWarnings("unused")
    MEDIUMAQUAMARINE("#66CDAA"),

    @SuppressWarnings("unused")
    MEDIUMBLUE("#0000CD"),

    @SuppressWarnings("unused")
    MEDIUMORCHID("#BA55D3"),

    @SuppressWarnings("unused")
    MEDIUMPURPLE("#9370DB"),

    @SuppressWarnings("unused")
    MEDIUMSEAGREEN("#3CB371"),

    @SuppressWarnings("unused")
    MEDIUMSLATEBLUE("#7B68EE"),

    @SuppressWarnings("unused")
    MEDIUMSPRINGGREEN("#00FA9A"),

    @SuppressWarnings("unused")
    MEDIUMTURQUOISE("#48D1CC"),

    @SuppressWarnings("unused")
    MEDIUMVIOLETRED("#C71585"),

    @SuppressWarnings("unused")
    MIDNIGHTBLUE("#191970"),

    @SuppressWarnings("unused")
    MINTCREAM("#F5FFFA"),

    @SuppressWarnings("unused")
    MISTYROSE("#FFE4E1"),

    @SuppressWarnings("unused")
    MOCCASSIN("#FFE4B5"),

    @SuppressWarnings("unused")
    NAVAJOWHITE("#FFDEAD"),

    @SuppressWarnings("unused")
    NAVY("#000080"),

    @SuppressWarnings("unused")
    OLDLACE("#FDF5E6"),

    @SuppressWarnings("unused")
    OLIVE("#808000"),

    @SuppressWarnings("unused")
    OLIVEDRAB("#6B8E23"),

    @SuppressWarnings("unused")
    ORANGE("#FFA500"),

    @SuppressWarnings("unused")
    ORANGERED("#FF4500"),

    @SuppressWarnings("unused")
    ORCHID("#DA70D6"),

    @SuppressWarnings("unused")
    PALEGOLDENROD("#EEE8AA"),

    @SuppressWarnings("unused")
    PALEGREEN("#98FB98"),

    @SuppressWarnings("unused")
    PALETURQUOISE("#AFEEEE"),

    @SuppressWarnings("unused")
    PALEVIOLETRED("#DB7093"),

    @SuppressWarnings("unused")
    PAPAYAWHIP("#FFEFD5"),

    @SuppressWarnings("unused")
    PEACHPUFF("#FFDAB9"),

    @SuppressWarnings("unused")
    PERU("#CD853F"),

    @SuppressWarnings("unused")
    PINK("#FFC0CB"),

    @SuppressWarnings("unused")
    PLUM("#DDA0DD"),

    @SuppressWarnings("unused")
    POWDERBLUE("#B0E0E6"),

    @SuppressWarnings("unused")
    PURPLE("#800080"),

    @SuppressWarnings("unused")
    RED("#FF0000"),

    @SuppressWarnings("unused")
    ROSYBROWN("#BC8F8F"),

    @SuppressWarnings("unused")
    ROYALBLUE("#4169E1"),

    @SuppressWarnings("unused")
    SADDLEBROWN("#8B4513"),

    @SuppressWarnings("unused")
    SALMON("#FA8072"),

    @SuppressWarnings("unused")
    SANDYBROWN("#F4A460"),

    @SuppressWarnings("unused")
    SEAGREEN("#2E8B57"),

    @SuppressWarnings("unused")
    SEASHELL("#FFF5EE"),

    @SuppressWarnings("unused")
    SIENNA("#A0522D"),

    @SuppressWarnings("unused")
    SILVER("#C0C0C0"),

    @SuppressWarnings("unused")
    SKYBLUE("#87CEEB"),

    @SuppressWarnings("unused")
    SLATEBLUE("#6A5ACD"),

    @SuppressWarnings("unused")
    SLATEGRAY("#708090"),

    @SuppressWarnings("unused")
    SLATEGREY("#708090"),

    @SuppressWarnings("unused")
    SNOW("#FFFAFA"),

    @SuppressWarnings("unused")
    SPRINGGREEN("#00FF7F"),

    @SuppressWarnings("unused")
    STEELBLUE("#4682B4"),

    @SuppressWarnings("unused")
    TAN("#D2B48C"),

    @SuppressWarnings("unused")
    TEAL("#008080"),

    @SuppressWarnings("unused")
    THISTLE("#D8BFD8"),

    @SuppressWarnings("unused")
    TOMATO("#FF6347"),

    @SuppressWarnings("unused")
    TURQUOISE("#40E0D0"),

    @SuppressWarnings("unused")
    VIOLET("#EE82EE"),

    @SuppressWarnings("unused")
    WHEAT("#F5DEB3"),

    @SuppressWarnings("unused")
    WHITE("#FFFFFF"),

    @SuppressWarnings("unused")
    WHITESMOKE("#F5F5F5"),

    @SuppressWarnings("unused")
    YELLOW("#FFFF00"),

    @SuppressWarnings("unused")
    YELLOWGREEN("#9ACD32");

    private final Color color;

    HtmlColor(String hexRgb) {
        color = convertColor(hexRgb);
    }

    @Override
    public final String getIndexKey() {
        return name();
    }

    public final Color getColor() {
        return color;
    }

    @SuppressWarnings("OverlyComplexBooleanExpression")
    private static Color convertColor(String hexRgb) {
        if ( hexRgb == null || !hexRgb.startsWith("#") || hexRgb.length() != 4 && hexRgb.length() != 7 ) {
            return null;
        }
        try {
            final String adjustedHexRgb = hexRgb.substring(1, hexRgb.length());
            switch ( adjustedHexRgb.length() ) {
                case 3:
                    return new Color(
                            parseInt(String.valueOf(adjustedHexRgb.charAt(0)), 16) * 17,
                            parseInt(String.valueOf(adjustedHexRgb.charAt(1)), 16) * 17,
                            parseInt(String.valueOf(adjustedHexRgb.charAt(2)), 16) * 17
                    );
                case 6:
                    return new Color(
                            parseInt(String.valueOf(adjustedHexRgb.substring(0, 2)), 16),
                            parseInt(String.valueOf(adjustedHexRgb.substring(2, 4)), 16),
                            parseInt(String.valueOf(adjustedHexRgb.substring(4, 6)), 16)
                    );
            }
            return null;
        } catch ( NumberFormatException ex ) {
            return null;
        }
    }
}
