import { OrganizationSwitcher, auth } from "@clerk/nextjs";

const organizationId = () => {
    const { user, userId, orgId} = auth();
    return (
        <div>
            Organization page
        </div>
    );
}

export default organizationId;