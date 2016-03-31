import { Pipe, PipeTransform } from "angular2/core";

@Pipe({ name: "datePipe" })
export class DatePipe implements PipeTransform  {
    transform(date, args): string {
        return new Date(date).toDateString();
    }
}