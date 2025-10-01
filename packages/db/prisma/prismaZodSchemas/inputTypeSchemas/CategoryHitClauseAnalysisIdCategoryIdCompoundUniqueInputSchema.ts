import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const CategoryHitClauseAnalysisIdCategoryIdCompoundUniqueInputSchema: z.ZodType<Prisma.CategoryHitClauseAnalysisIdCategoryIdCompoundUniqueInput> = z.object({
  clauseAnalysisId: z.string(),
  categoryId: z.string()
}).strict() as z.ZodType<Prisma.CategoryHitClauseAnalysisIdCategoryIdCompoundUniqueInput>;

export default CategoryHitClauseAnalysisIdCategoryIdCompoundUniqueInputSchema;
