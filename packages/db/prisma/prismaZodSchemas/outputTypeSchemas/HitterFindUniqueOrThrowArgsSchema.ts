import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { HitterIncludeSchema } from '../inputTypeSchemas/HitterIncludeSchema'
import { HitterWhereUniqueInputSchema } from '../inputTypeSchemas/HitterWhereUniqueInputSchema'
import { TriggerFindManyArgsSchema } from "../outputTypeSchemas/TriggerFindManyArgsSchema"
import { HitterCountOutputTypeArgsSchema } from "../outputTypeSchemas/HitterCountOutputTypeArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const HitterSelectSchema: z.ZodType<Prisma.HitterSelect> = z.object({
  id: z.boolean().optional(),
  slug: z.boolean().optional(),
  version: z.boolean().optional(),
  defaultScoring: z.boolean().optional(),
  label: z.boolean().optional(),
  isActive: z.boolean().optional(),
  triggerInstruction: z.boolean().optional(),
  triggerKeywords: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  Trigger: z.union([z.boolean(),z.lazy(() => TriggerFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => HitterCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const HitterFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.HitterFindUniqueOrThrowArgs> = z.object({
  select: HitterSelectSchema.optional(),
  include: z.lazy(() => HitterIncludeSchema).optional(),
  where: HitterWhereUniqueInputSchema, 
}).strict();

export default HitterFindUniqueOrThrowArgsSchema;
