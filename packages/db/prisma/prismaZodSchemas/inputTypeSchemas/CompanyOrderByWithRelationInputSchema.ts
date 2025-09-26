import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { ServiceOrderByRelationAggregateInputSchema } from './ServiceOrderByRelationAggregateInputSchema';
import { CompanyAliasOrderByRelationAggregateInputSchema } from './CompanyAliasOrderByRelationAggregateInputSchema';
import { DomainOrderByRelationAggregateInputSchema } from './DomainOrderByRelationAggregateInputSchema';

export const CompanyOrderByWithRelationInputSchema: z.ZodType<Prisma.CompanyOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  slug: z.lazy(() => SortOrderSchema).optional(),
  displayName: z.lazy(() => SortOrderSchema).optional(),
  websiteUrl: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  countryCode: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  description: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  Service: z.lazy(() => ServiceOrderByRelationAggregateInputSchema).optional(),
  CompanyAlias: z.lazy(() => CompanyAliasOrderByRelationAggregateInputSchema).optional(),
  Domain: z.lazy(() => DomainOrderByRelationAggregateInputSchema).optional()
}).strict() as z.ZodType<Prisma.CompanyOrderByWithRelationInput>;

export default CompanyOrderByWithRelationInputSchema;
