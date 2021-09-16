type FormatOptions = {
    indentation?: string;
    filter?: (node: any) => boolean;
    stripComments?: boolean;
    collapseContent?: boolean;
    lineSeparator?: string;
    whiteSpaceAtEndOfSelfclosingTag?: boolean;
    attrLineSeparator?: string;
}

declare function format(xml: string, options?: FormatOptions): string;

export = format;
