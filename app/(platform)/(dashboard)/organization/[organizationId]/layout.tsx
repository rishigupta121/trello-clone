import { OrgControl } from "./_components/org-control";

const OrganizationIdLayout = ({
   children
}:{
   children:React.ReactNode
}) => {
 return(
    <>
    <OrgControl>
    {children}
    </OrgControl>
    </>
 );
} 

export default OrganizationIdLayout; 