export default function NotificationHeader({ notRead }) {
    return (
        <div className="flex justify-between">
            <div>
                <h1>Notifications <span>{ notRead }</span></h1>
            </div>

            <div>
                <button>Mark all as read</button>
            </div>
        </div>
    );
};