import { ProgressBar } from "react-bootstrap";


function DangerBar(DangerBarProps: { value: number }) {
    const { value } = DangerBarProps;
    function getVariant(value: number) {
        if (value < 30) {
            return 'success';
        } else if (value < 60) {
            return 'warning';
        } else {
            return 'danger'
        };
    }
    return (
        <ProgressBar animated now={value} variant={getVariant(value)} />
    );
}
export default DangerBar;
