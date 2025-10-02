import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CompanyIncludeSchema } from '../inputTypeSchemas/CompanyIncludeSchema'
import { CompanyWhereUniqueInputSchema } from '../inputTypeSchemas/CompanyWhereUniqueInputSchema'
import { ServiceFindManyArgsSchema } from "../outputTypeSchemas/ServiceFindManyArgsSchema"
import { CompanyAliasFindManyArgsSchema } from "../outputTypeSchemas/CompanyAliasFindManyArgsSchema"
import { DomainFindManyArgsSchema } from "../outputTypeSchemas/DomainFindManyArgsSchema"
import { CompanyCountOutputTypeArgsSchema } from "../outputTypeSchemas/CompanyCountOutputTypeArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const CompanySelectSchema: z.ZodType<Prisma.CompanySelect> = z.object({
  id: z.boolean().optional(),
  slug: z.boolean().optional(),
  displayName: z.boolean().optional(),
  websiteUrl: z.boolean().optional(),
  countryCode: z.boolean().optional(),
  description: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  Service: z.union([z.boolean(),z.lazy(() => ServiceFindManyArgsSchema)]).optional(),
  CompanyAlias: z.union([z.boolean(),z.lazy(() => CompanyAliasFindManyArgsSchema)]).optional(),
  Domain: z.union([z.boolean(),z.lazy(() => DomainFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => CompanyCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const CompanyFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.CompanyFindUniqueOrThrowArgs> = z.object({
  select: CompanySelectSchema.optional(),
  include: z.lazy(() => CompanyIncludeSchema).optional(),
  where: CompanyWhereUniqueInputSchema, 
}).strict();

export default CompanyFindUniqueOrThrowArgsSchema;
