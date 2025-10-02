import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const CategoryHitClauseAnalysisIdCategoryIdCompoundUniqueInputSchema: z.ZodType<Prisma.CategoryHitClauseAnalysisIdCategoryIdCompoundUniqueInput> = z.strictObject({
  clauseAnalysisId: z.string(),
  categoryId: z.string(),
});

export default CategoryHitClauseAnalysisIdCategoryIdCompoundUniqueInputSchema;
