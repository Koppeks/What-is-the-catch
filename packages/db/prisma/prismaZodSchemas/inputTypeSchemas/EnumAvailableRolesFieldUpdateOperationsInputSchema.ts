import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AvailableRolesSchema } from './AvailableRolesSchema';

export const EnumAvailableRolesFieldUpdateOperationsInputSchema: z.ZodType<Prisma.EnumAvailableRolesFieldUpdateOperationsInput> = z.strictObject({
  set: z.lazy(() => AvailableRolesSchema).optional(),
});

export default EnumAvailableRolesFieldUpdateOperationsInputSchema;
