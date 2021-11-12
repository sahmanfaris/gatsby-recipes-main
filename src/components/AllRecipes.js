import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import RecipesList from "./RecipesList"
import TagsList from "./TagsList"

const AllRecipes = () => {
  const {
    allContentfulRecipe: { nodes: recipes },
  } = useStaticQuery(graphql`
    {
      allContentfulRecipe(sort: { fields: title, order: ASC }) {
        nodes {
          id
          title
          cookTime
          prepTime
          content {
            tags
          }
          image {
            gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
          }
        }
      }
    }
  `)
  return (
    <section className="recipes-container">
      <TagsList recipes={recipes} />
      <RecipesList recipes={recipes} />
    </section>
  )
}

export default AllRecipes
