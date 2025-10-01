import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CategoryHitIncludeSchema } from '../inputTypeSchemas/CategoryHitIncludeSchema'
import { CategoryHitCreateInputSchema } from '../inputTypeSchemas/CategoryHitCreateInputSchema'
import { CategoryHitUncheckedCreateInputSchema } from '../inputTypeSchemas/CategoryHitUncheckedCreateInputSchema'
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

export const CategoryHitCreateArgsSchema: z.ZodType<Prisma.CategoryHitCreateArgs> = z.object({
  select: CategoryHitSelectSchema.optional(),
  include: z.lazy(() => CategoryHitIncludeSchema).optional(),
  data: z.union([ CategoryHitCreateInputSchema,CategoryHitUncheckedCreateInputSchema ]),
}).strict() as z.ZodType<Prisma.CategoryHitCreateArgs>;

export default CategoryHitCreateArgsSchema;
