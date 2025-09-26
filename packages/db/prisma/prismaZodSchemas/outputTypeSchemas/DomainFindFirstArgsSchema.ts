import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { DomainIncludeSchema } from '../inputTypeSchemas/DomainIncludeSchema'
import { DomainWhereInputSchema } from '../inputTypeSchemas/DomainWhereInputSchema'
import { DomainOrderByWithRelationInputSchema } from '../inputTypeSchemas/DomainOrderByWithRelationInputSchema'
import { DomainWhereUniqueInputSchema } from '../inputTypeSchemas/DomainWhereUniqueInputSchema'
import { DomainScalarFieldEnumSchema } from '../inputTypeSchemas/DomainScalarFieldEnumSchema'
import { CompanyArgsSchema } from "../outputTypeSchemas/CompanyArgsSchema"
import { ServiceDomainFindManyArgsSchema } from "../outputTypeSchemas/ServiceDomainFindManyArgsSchema"
import { DomainCountOutputTypeArgsSchema } from "../outputTypeSchemas/DomainCountOutputTypeArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const DomainSelectSchema: z.ZodType<Prisma.DomainSelect> = z.object({
  id: z.boolean().optional(),
  companyId: z.boolean().optional(),
  host: z.boolean().optional(),
  note: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  company: z.union([z.boolean(),z.lazy(() => CompanyArgsSchema)]).optional(),
  ServiceDomain: z.union([z.boolean(),z.lazy(() => ServiceDomainFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => DomainCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const DomainFindFirstArgsSchema: z.ZodType<Prisma.DomainFindFirstArgs> = z.object({
  select: DomainSelectSchema.optional(),
  include: z.lazy(() => DomainIncludeSchema).optional(),
  where: DomainWhereInputSchema.optional(),
  orderBy: z.union([ DomainOrderByWithRelationInputSchema.array(),DomainOrderByWithRelationInputSchema ]).optional(),
  cursor: DomainWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ DomainScalarFieldEnumSchema,DomainScalarFieldEnumSchema.array() ]).optional(),
}).strict() as z.ZodType<Prisma.DomainFindFirstArgs>;

export default DomainFindFirstArgsSchema;
