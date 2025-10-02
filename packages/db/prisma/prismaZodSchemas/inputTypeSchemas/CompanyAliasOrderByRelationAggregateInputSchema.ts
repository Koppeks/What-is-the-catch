import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const CompanyAliasOrderByRelationAggregateInputSchema: z.ZodType<Prisma.CompanyAliasOrderByRelationAggregateInput> = z.strictObject({
  _count: z.lazy(() => SortOrderSchema).optional(),
});

export default CompanyAliasOrderByRelationAggregateInputSchema;
