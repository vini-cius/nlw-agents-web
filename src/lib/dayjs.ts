import 'dayjs/locale/pt-br';
import lib from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

lib.locale("pt-br");
lib.extend(relativeTime);

export const dayjs = lib;
