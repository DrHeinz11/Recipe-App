import { ListItem, UnorderedList } from "@chakra-ui/react";

function TagsCard(props) {
  return (
    <UnorderedList>
      {props.ingredientes.map((element, index) => {
        <ListItem>{element.ingredientes}</ListItem>;
      })}
    </UnorderedList>
  );
}

export default TagsCard;
