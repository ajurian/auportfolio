import { SystemStyleObject } from "@mui/system";

export type NestedSxProps<Theme extends object = {}> =
    | SystemStyleObject<Theme>
    | ((theme: Theme) => SystemStyleObject<Theme>);
