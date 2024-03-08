'use client';

import { Spinner } from '_components';

export default Home;

function Home() {
    const user = true;

    if (user) {
        return (
            <>
                <span>Adminka</span>
            </>
        );
    } else {
        return <Spinner />;
    }
}
