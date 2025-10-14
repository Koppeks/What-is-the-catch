import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TriggerFindManyArgsSchema } from "../outputTypeSchemas/TriggerFindManyArgsSchema"
import { ClauseCategoryCountOutputTypeArgsSchema } from "../outputTypeSchemas/ClauseCategoryCountOutputTypeArgsSchema"

export const ClauseCategoryIncludeSchema: z.ZodType<Prisma.ClauseCategoryInclude> = z.object({
  Trigger: z.union([z.boolean(),z.lazy(() => TriggerFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => ClauseCategoryCountOutputTypeArgsSchema)]).optional(),
}).strict();

export default ClauseCategoryIncludeSchema;
