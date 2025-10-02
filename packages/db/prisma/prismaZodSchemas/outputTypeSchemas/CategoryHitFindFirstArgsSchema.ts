import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CategoryHitIncludeSchema } from '../inputTypeSchemas/CategoryHitIncludeSchema'
import { CategoryHitWhereInputSchema } from '../inputTypeSchemas/CategoryHitWhereInputSchema'
import { CategoryHitOrderByWithRelationInputSchema } from '../inputTypeSchemas/CategoryHitOrderByWithRelationInputSchema'
import { CategoryHitWhereUniqueInputSchema } from '../inputTypeSchemas/CategoryHitWhereUniqueInputSchema'
import { CategoryHitScalarFieldEnumSchema } from '../inputTypeSchemas/CategoryHitScalarFieldEnumSchema'
import { ClauseAnalysisArgsSchema } from "../outputTypeSchemas/ClauseAnalysisArgsSchema"
import { ClauseCategoryArgsSchema } from "../outputTypeSchemas/ClauseCategoryArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const CategoryHitSelectSchema: z.ZodType<Prisma.CategoryHitSelect> = z.object({
  id: z.boolean().optional(),
  clauseAnalysisId: z.boolean().optional(),
  categoryId: z.boolean().optional(),
  confidence: z.boolean().optional(),
  clauseAnalysis: z.union([z.boolean(),z.lazy(() => ClauseAnalysisArgsSchema)]).optional(),
  category: z.union([z.boolean(),z.lazy(() => ClauseCategoryArgsSchema)]).optional(),
}).strict()

export const CategoryHitFindFirstArgsSchema: z.ZodType<Prisma.CategoryHitFindFirstArgs> = z.object({
  select: CategoryHitSelectSchema.optional(),
  include: z.lazy(() => CategoryHitIncludeSchema).optional(),
  where: CategoryHitWhereInputSchema.optional(), 
  orderBy: z.union([ CategoryHitOrderByWithRelationInputSchema.array(), CategoryHitOrderByWithRelationInputSchema ]).optional(),
  cursor: CategoryHitWhereUniqueInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ CategoryHitScalarFieldEnumSchema, CategoryHitScalarFieldEnumSchema.array() ]).optional(),
}).strict();

export default CategoryHitFindFirstArgsSchema;
