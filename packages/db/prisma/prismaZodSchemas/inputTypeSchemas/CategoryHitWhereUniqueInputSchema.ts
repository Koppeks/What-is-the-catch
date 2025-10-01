import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CategoryHitClauseAnalysisIdCategoryIdCompoundUniqueInputSchema } from './CategoryHitClauseAnalysisIdCategoryIdCompoundUniqueInputSchema';
import { CategoryHitWhereInputSchema } from './CategoryHitWhereInputSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { FloatNullableFilterSchema } from './FloatNullableFilterSchema';
import { ClauseAnalysisScalarRelationFilterSchema } from './ClauseAnalysisScalarRelationFilterSchema';
import { ClauseAnalysisWhereInputSchema } from './ClauseAnalysisWhereInputSchema';
import { ClauseCategoryScalarRelationFilterSchema } from './ClauseCategoryScalarRelationFilterSchema';
import { ClauseCategoryWhereInputSchema } from './ClauseCategoryWhereInputSchema';

export const CategoryHitWhereUniqueInputSchema: z.ZodType<Prisma.CategoryHitWhereUniqueInput> = z.union([
  z.object({
    id: z.string().cuid(),
    clauseAnalysisId_categoryId: z.lazy(() => CategoryHitClauseAnalysisIdCategoryIdCompoundUniqueInputSchema)
  }),
  z.object({
    id: z.string().cuid(),
  }),
  z.object({
    clauseAnalysisId_categoryId: z.lazy(() => CategoryHitClauseAnalysisIdCategoryIdCompoundUniqueInputSchema),
  }),
])
.and(z.object({
  id: z.string().cuid().optional(),
  clauseAnalysisId_categoryId: z.lazy(() => CategoryHitClauseAnalysisIdCategoryIdCompoundUniqueInputSchema).optional(),
  AND: z.union([ z.lazy(() => CategoryHitWhereInputSchema),z.lazy(() => CategoryHitWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => CategoryHitWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => CategoryHitWhereInputSchema),z.lazy(() => CategoryHitWhereInputSchema).array() ]).optional(),
  clauseAnalysisId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  categoryId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  confidence: z.union([ z.lazy(() => FloatNullableFilterSchema),z.number() ]).optional().nullable(),
  clauseAnalysis: z.union([ z.lazy(() => ClauseAnalysisScalarRelationFilterSchema),z.lazy(() => ClauseAnalysisWhereInputSchema) ]).optional(),
  category: z.union([ z.lazy(() => ClauseCategoryScalarRelationFilterSchema),z.lazy(() => ClauseCategoryWhereInputSchema) ]).optional(),
}).strict()) as z.ZodType<Prisma.CategoryHitWhereUniqueInput>;

export default CategoryHitWhereUniqueInputSchema;
