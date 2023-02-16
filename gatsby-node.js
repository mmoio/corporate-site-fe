exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions;
  const typeDefs = `
    union SHARED_BLOCKS_UNION = STRAPI__COMPONENT_SHARED_BLOCK_CONTENTS_LIST | STRAPI__COMPONENT_SHARED_BLOCK_INTRO | STRAPI__COMPONENT_SHARED_BLOCK_LIST_ATTACHMENTS | STRAPI__COMPONENT_SHARED_BLOCK_VISUAL_TEXT | STRAPI__COMPONENT_SHARED_BLOCK_ATTACHMENTS_GRID | STRAPI__COMPONENT_SHARED_BLOCK_CTA_GRID | STRAPI__COMPONENT_SHARED_BLOCK_VISUAL | STRAPI__COMPONENT_SHARED_BLOCK_CTA_BANNER
  `;
  createTypes(typeDefs);
};
