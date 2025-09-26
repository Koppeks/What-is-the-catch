import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AvailableRolesSchema } from './AvailableRolesSchema';

export const EnumAvailableRolesFieldUpdateOperationsInputSchema: z.ZodType<Prisma.EnumAvailableRolesFieldUpdateOperationsInput> = z.object({
  set: z.lazy(() => AvailableRolesSchema).optional()
}).strict() as z.ZodType<Prisma.EnumAvailableRolesFieldUpdateOperationsInput>;

export default EnumAvailableRolesFieldUpdateOperationsInputSchema;
