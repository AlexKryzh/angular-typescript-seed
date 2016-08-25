export function TrimFilter() {
    return function (input: string, chars: string): string {
        let trim = chars || '\\s';
        return angular.isString(input) ? input.replace(new RegExp('^' + trim + '+|' + trim + '+$', 'g'), '') : input;
    }
}