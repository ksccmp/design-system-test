import { Button } from './components';

export default function App() {
    return (
        <div className="flex flex-col gap-2 p-4">
            <h2>eslint + prettier로 포매팅 자동화하기</h2>
            <p>저장을 해야만 에러가 사라집니다...</p>
            <Button label="default" />
            <Button color="primary" size="sm" label="primary sm" />
            <Button color="primary" size="lg" label="primary lg" />
            <Button color="secondary" size="sm" label="secondary sm" />
            <Button color="secondary" size="lg" label="secondary lg" />
        </div>
    );
}
