import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const CompanyAliasOrderByRelationAggregateInputSchema: z.ZodType<Prisma.CompanyAliasOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict() as z.ZodType<Prisma.CompanyAliasOrderByRelationAggregateInput>;

export default CompanyAliasOrderByRelationAggregateInputSchema;
