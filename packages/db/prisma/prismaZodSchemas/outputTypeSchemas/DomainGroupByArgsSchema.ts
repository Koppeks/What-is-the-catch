import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { DomainWhereInputSchema } from '../inputTypeSchemas/DomainWhereInputSchema'
import { DomainOrderByWithAggregationInputSchema } from '../inputTypeSchemas/DomainOrderByWithAggregationInputSchema'
import { DomainScalarFieldEnumSchema } from '../inputTypeSchemas/DomainScalarFieldEnumSchema'
import { DomainScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/DomainScalarWhereWithAggregatesInputSchema'

export const DomainGroupByArgsSchema: z.ZodType<Prisma.DomainGroupByArgs> = z.object({
  where: DomainWhereInputSchema.optional(),
  orderBy: z.union([ DomainOrderByWithAggregationInputSchema.array(),DomainOrderByWithAggregationInputSchema ]).optional(),
  by: DomainScalarFieldEnumSchema.array(),
  having: DomainScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() as z.ZodType<Prisma.DomainGroupByArgs>;

export default DomainGroupByArgsSchema;
