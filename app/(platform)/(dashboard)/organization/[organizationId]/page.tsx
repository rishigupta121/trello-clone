import { OrganizationSwitcher, auth } from "@clerk/nextjs";

const organizationId = () => {
    const { user, userId, orgId} = auth();
    return (
        <div>
            {/* <OrganizationSwitcher hidePersonal /> */}
        </div>
    );
}

export default organizationId;