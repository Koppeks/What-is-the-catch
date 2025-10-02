import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CategoryHitIncludeSchema } from '../inputTypeSchemas/CategoryHitIncludeSchema'
import { CategoryHitUpdateInputSchema } from '../inputTypeSchemas/CategoryHitUpdateInputSchema'
import { CategoryHitUncheckedUpdateInputSchema } from '../inputTypeSchemas/CategoryHitUncheckedUpdateInputSchema'
import { CategoryHitWhereUniqueInputSchema } from '../inputTypeSchemas/CategoryHitWhereUniqueInputSchema'
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

export const CategoryHitUpdateArgsSchema: z.ZodType<Prisma.CategoryHitUpdateArgs> = z.object({
  select: CategoryHitSelectSchema.optional(),
  include: z.lazy(() => CategoryHitIncludeSchema).optional(),
  data: z.union([ CategoryHitUpdateInputSchema, CategoryHitUncheckedUpdateInputSchema ]),
  where: CategoryHitWhereUniqueInputSchema, 
}).strict();

export default CategoryHitUpdateArgsSchema;
